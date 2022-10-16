<?php

include "app/base/BaseView.php";

class ActivitiesView extends BaseView
{
    function render($title, $content)
    {
        parent::render($title, $content);

        for ($i = 0; $i < sizeof($content->titles); $i++) {
            echo "<div class='textbox' id='{$content->ids[$i]}'>";
            echo "<img src='http://localhost/my-website/public/assets/img/{$content->imageUrls[$i]}.jpg'>";
            echo "<h2>{$content->titles[$i]}</h2>";
            echo "<p>{$content->descriptions[$i]}</p>";
            echo "</div>";
        }
    }
}
