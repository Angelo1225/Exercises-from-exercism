<?php

class ProgramWindow
{
    public $x;
    public $y;
    public $width;
    public $height;

    function __construct()
    {
        $this->width = 800;
        $this->height = 600;
        $this->x = 0;
        $this->y = 0;
    }

    public function resize($size)
    {
        $this->width = $size->width;
        $this->height = $size->height;
    }

    public function move($position)
    {
        $this->x = $position->x;
        $this->y = $position->y;
    }
}