<?php

include "app/base/BaseView.php";

class PhotoalbumView extends BaseView
{
    function render($title, $content)
    {
        parent::render($title, $content);

        echo "<div class='photoalbum'>";
        foreach ($content->fotosPaths as $value) {
            echo "<img src='http://localhost/my-website/public/assets/img/$value.jpg' title={$content->titles[$value-1]}>";
        }
        echo "</div>";
    }
}
