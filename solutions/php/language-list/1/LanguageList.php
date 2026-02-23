<?php

function language_list(String ...$lenguages)
{
    $arrayLenguages = [];
    foreach($lenguages as $lenguage){
        $arrayLenguages[] = $lenguage;
    }
    return $arrayLenguages;
}

function add_to_language_list(Array $language_list, String $newLenguage)
{
    $newLenguageArray = $language_list;
    array_push($newLenguageArray, $newLenguage);
    return $newLenguageArray;
}

function prune_language_list($language_list)
{
    $actuallyLenguageArray = $language_list;
    array_shift($actuallyLenguageArray);
    return $actuallyLenguageArray;
}

function current_language($language_list)
{
    return $language_list[0];
}

function language_list_length($language_list)
{
    return sizeof($language_list);
}