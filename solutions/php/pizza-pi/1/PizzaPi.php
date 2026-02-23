<?php

class PizzaPi
{
    public function calculateDoughRequirement(Int $pizzas, Int $persons)
    {
        return $pizzas * ( ($persons *20 ) + 200);
        throw new \BadFunctionCallException("Implement the function");
    }

    public function calculateSauceRequirement(Int $pizzas, Int $sauceCan)
    {
        return $pizzas * 125 / $sauceCan;
        throw new \BadFunctionCallException("Implement the function");
    }

    public function calculateCheeseCubeCoverage(Int $cheeseDimension, Float $thickness, Int $diameter)
    {
        return round(( $cheeseDimension** 3 ) / ( $thickness * 3.14 * $diameter ) - 1);
        throw new \BadFunctionCallException("Implement the function");
    }

    public function calculateLeftOverSlices(Int $numPizzas, Int $numFriends)
    {
        return ( $numPizzas * 8 ) % $numFriends;
        throw new \BadFunctionCallException("Implement the function");
    }
}
