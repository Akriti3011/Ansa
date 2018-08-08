<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Order;
use App\Order_detail;
use App\Customer;
use App\Menu;

class OrderController extends Controller
{
    public function getOrder()
    {
        $orders=order::all();
        return response()->json(['success'=> $orders], 200); 
    }

     public function getOrderDetails(Order $order)
    {
    	$order_details = array();
    	$order_detail = array();
        $order_items=order_detail::where('order_no', '=', $order->id)->get();
        foreach ($order_items as $order_item) {
        	$order_detail['id']= $order_item->id;
        	$menu = menu::where('id', '=', $order_item->menu_id)->first();
        	$order_detail['menu_name'] = $menu->name;
        	$order_detail['quantity']=$order_item->quantity;
        	$order_detail['amount'] = $order_item->amount;
        	array_push($order_details, $order_detail);
        }
        $customer_details = customer::where('id', '=', $order->customer_id)->first();
        return response()->json(['order_detail'=>$order_details,'customer_detail'=> $customer_details], 200); 
    }


}
