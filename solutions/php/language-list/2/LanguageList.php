<?php

function language_list(...$lenguages)
{
    $arrayLenguages = [];
    $arrayLenguages = $lenguages;
    return $arrayLenguages;
}

function add_to_language_list(Array $language_list, String $newLenguage)
{
    array_push($language_list, $newLenguage);
    return $language_list;
}

function prune_language_list($language_list)
{
    array_shift($language_list);
    return $language_list;
}

function current_language($language_list)
{
    return $language_list[0];
}

function language_list_length($language_list)
{
    return sizeof($language_list);
}