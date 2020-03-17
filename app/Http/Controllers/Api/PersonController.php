<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Person;
use Croppa;

class PersonController extends Controller
{
    public function index()
    {
        $people = Person::orderBy('name')->with('image')->limit(20)->get();

        foreach ($people as $person) {
            $person->image_url = Croppa::url('images/' . $person->image->path, 320, null, ['resize']);
        }

        return $people;
    }
}
