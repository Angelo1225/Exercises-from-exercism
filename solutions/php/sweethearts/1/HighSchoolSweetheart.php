<?php

class HighSchoolSweetheart
{
    public function firstLetter(string $name): string
    {
        return substr($name, 0, 1);
        
        throw new \BadFunctionCallException("Implement the function");
    }

    public function initial(string $name): string
    {
        return strtoupper($this->firstLetter($name)) . ".";
        
        throw new \BadFunctionCallException("Implement the function");
    }

    public function initials(string $name): string
    {
        
        $fullName = explode(" ", $name);
        
        return $this->initial($fullName[0]) . " " . $this->initial($fullName[1]);
        
        throw new \BadFunctionCallException("Implement the function");
    }

    public function pair(string $sweetheart_a, string $sweetheart_b): string
    {
        $initialsCople = $this->initials($sweetheart_a) . "  +  " . $this->initials($sweetheart_b);
        return   <<<EXPECTED_HEART
                 ******       ******
               **      **   **      **
             **         ** **         **
            **            *            **
            **                         **
            **     $initialsCople     **
             **                       **
               **                   **
                 **               **
                   **           **
                     **       **
                       **   **
                         ***
                          *
            EXPECTED_HEART;

              
        throw new \BadFunctionCallException("Implement the function");
    }
}
