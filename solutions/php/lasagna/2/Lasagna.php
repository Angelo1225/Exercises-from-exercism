<?php

declare(strict_types=1);

class Lasagna
{
    public const OVENTIME = 40;
    public const LAYERSTIME = 2;
    // Please define the 'expectedCookTime()' function
    public function expectedCookTime()
    {
        return self::OVENTIME; 
    }
    
    // Please define the 'remainingCookTime($elapsed_minutes)' function
    public function remainingCookTime($elapsed_minutes)
    {
        return $this->expectedCookTime() - $elapsed_minutes;
    }
    
    // Please define the 'totalPreparationTime($layers_to_prep)' function
    public function totalPreparationTime($layersToPrep)
    {
        return $layersToPrep * self::LAYERSTIME;
    }

    // Please define the 'totalElapsedTime($layers_to_prep, $elapsed_minutes)' function
    public function totalElapsedTime($layersToPrep, $elapsedMinutes)
    {
        return $this->totalPreparationTime($layersToPrep) + $elapsedMinutes;
    }

    // Please define the 'alarm()' function
    public function alarm()
    {
        return 'Ding!';
    }
}