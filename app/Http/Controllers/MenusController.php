<?php

namespace App\Http\Controllers;
use App\Menu;

use Illuminate\Http\Request;

class MenusController extends Controller
{
    public function menu()
    {
        return menu::all();
    }

    public function menuItem(menu $menu)
    {
        return $menu;
    }

    public function addMenu(Request $request)
    {
    	$items = new menu;
    	$items->name = $request->name;
    	$items->price = $request->price;
    	$items->description = $request->description;
    	if ($request->hasFile('Image')){
            $filename = $request->file("Image")->getClientOriginalName();
            $directory = '/images';
            Storage::makeDirectory($directory);
            $image = $request->file('Image');
            $splitName = explode('.', $filename, 2);
            $date = new DateTime("now");
            $strip = $date->format('YmdHis');
            $path = 'storage'.$directory.$splitName[0].$strip.'.'.$splitName[1];
            $storename = $splitName[0].$strip.'.'.$splitName[1];
            $items->imagePath = $path;
            $image = $image->storeAs($directory, $storename ,'local');   
        }
    $items->save();
    	return response()->json(['success'=> "Menu added"], 200); 
    } 
}
