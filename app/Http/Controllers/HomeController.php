<?php

namespace App\Http\Controllers;

class HomeController extends Controller
{
   public function index(){
      $data = [
        'john', 'doe'
      ];
      return view('welcome')->with('data', json_encode($data));
   }
}