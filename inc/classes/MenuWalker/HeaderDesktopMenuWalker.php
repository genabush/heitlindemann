<?php

namespace Crisp\MenuWalker;

use Walker_Nav_Menu;

class HeaderDesktopMenuWalker extends Walker_Nav_Menu
{

    function start_lvl(&$output, $depth = 0, $args = []) {
        $indent = str_repeat("\t", $depth);
        $output .= "\n$indent<ul class=\"header__submenu submenu\">\n";
    }

}