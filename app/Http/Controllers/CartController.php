<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Order;
use App\Customer;
use App\Order_detail;



class CartController extends Controller
{
    public function addOrderDetails(Request $request){

    	$items = $request->all();
    	$cart_items = $items[0];
    	$total = $items[1];
    	$customer_detail = $items[2];

    	$customer = new Customer;
    	$customer->name = $customer_detail['name'];
    	$customer->contact = $customer_detail['contact'];
    	$customer->email = $customer_detail['email'];
    	$customer->pincode = $customer_detail['pincode'];
    	$customer->address = $customer_detail['address'];

    	$customer->save();
  
  		$today = date("Ymd");
		$random = strtoupper(substr(uniqid(sha1(time())),0,4));
		$unique = $today . $random;
    	 
    	$order = new Order;
    	$order->order_no = $unique;
    	$order->customer_id = $customer->id;
    	$order->total_amount = $total;

    	$order->save();
    	
    	foreach($cart_items as $cart_item){
    		$order_detail = new Order_detail;
    		$order_detail->order_no = $unique;
    		$order_detail->menu_id = $cart_item['id'];
    		$order_detail->quantity = $cart_item['quantity'];
    		$order_detail->amount = $cart_item['amount'];
    		$order_detail->save();
    	}

    	return response()->json(['success'=>'Order Placed'],200);

    }
}
