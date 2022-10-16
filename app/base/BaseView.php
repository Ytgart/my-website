<?php

class BaseView
{
    function render($title, $content)
    {
        include "app/views/Header.php";
    }
}