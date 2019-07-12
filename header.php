<?php

/**
 * Header file
 *
 * @package     WordPress
 * @subpackage  RST v3
 * @since       1.0.0
 * @author      Luke Kortunov
 */

?>

<!doctype html>
<html lang="<?php echo get_locale(); ?>">
<head>
    <title><?php echo wp_get_document_title(); ?></title>
    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>

<div class="wrapper">
    <header class="header">
        <div class="header__inner container">
            <a href="<?php echo home_url('/'); ?>" class="logo">
                <img src="<?php echo get_template_directory_uri(); ?>/assets/dist/img/logo_web.png" width="265" height="128" alt="logo">
            </a>
            <nav class="header__nav">
                <?php

                wp_nav_menu( array(
                    'theme_location'  => 'desktop',
                    'items_wrap'      => '<ul id="%1$s" class="header__list desktop-menu %2$s">%3$s</ul>',
                    'depth'           => 0,
                    'walker'          => new \Crisp\MenuWalker\HeaderDesktopMenuWalker(),

                    'menu'            => '',
                    'container'       => false,
                    'menu_class'      => 'menu',
                    'menu_id'         => '',
                    'echo'            => true,
                    'fallback_cb'     => 'wp_page_menu',
                    'before'          => '',
                    'after'           => '',
                    'link_before'     => '',
                    'link_after'      => '',
                ) );

                wp_nav_menu( array(
                    'theme_location'  => 'mobile',
                    'items_wrap'      => '<ul id="%1$s" class="header__list mobile_menu %2$s">%3$s</ul>',
                    'depth'           => 0,
                    'walker'          => new \Crisp\MenuWalker\HeaderDesktopMenuWalker(),

                    'menu'            => '',
                    'container'       => false,
                    'menu_class'      => 'menu',
                    'menu_id'         => '',
                    'echo'            => true,
                    'fallback_cb'     => 'wp_page_menu',
                    'before'          => '',
                    'after'           => '<span class="arrow"></span>',
                    'link_before'     => '',
                    'link_after'      => '',
                ) );

                ?>
            </nav>
            <span class="icon-phone">
                <img src="<?php echo get_template_directory_uri(); ?>/assets/dist/img/phone.svg" width="32" height="32" alt="icon">
            </span>

        </div>
    </header>

