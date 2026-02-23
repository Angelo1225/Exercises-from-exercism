<?php

class PizzaPi
{
    public const DOUGHTMINIMUN = 200;
    public const DOUGHTEXTRA = 20;
    public const SAUCECANDEFAULT = 125;
    public const CUBE = 3;
    public const SLICES = 8;
    
    public function calculateDoughRequirement(Int $pizzas, Int $persons)
    {
        return $pizzas * ( ($persons * self::DOUGHTEXTRA ) + self::DOUGHTMINIMUN);
        throw new \BadFunctionCallException("Implement the function");
    }

    public function calculateSauceRequirement(Int $pizzas, Int $sauceCan)
    {
        return $pizzas * self::SAUCECANDEFAULT / $sauceCan;
        throw new \BadFunctionCallException("Implement the function");
    }

    public function calculateCheeseCubeCoverage(Int $cheeseDimension, Float $thickness, Int $diameter)
    {
        return floor(( $cheeseDimension** self::CUBE ) / ( $thickness * pi() * $diameter ));
        throw new \BadFunctionCallException("Implement the function");
    }

    public function calculateLeftOverSlices(Int $numPizzas, Int $numFriends)
    {
        return ( $numPizzas * self::SLICES ) % $numFriends;
        throw new \BadFunctionCallException("Implement the function");
    }
}
