<?php

namespace App\Http\Controllers;
use App\menu;

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

}
