<?php

class Size 
{
    public $height;
    public $width;

    function __construct($height, $width)
    {
        $this->width = $width;
        $this->height = $height;
    }
}