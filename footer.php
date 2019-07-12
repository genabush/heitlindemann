<?php

/**
 * Footer template
 *
 * @package     WordPress
 * @subpackage  RST v3
 * @since       1.0.0
 * @author      Luke Kortunov
 */

?>

<?php # TODO: code here ?>
<footer class="footer">
    <div class="footer__top">
        <div class="container">
            <nav class="footer__nav">
                <?php
                wp_nav_menu( array(
                    'theme_location'  => 'footer',
                    'items_wrap'      => '<ul id="%1$s" class="footer__list %2$s">%3$s</ul>',
                    'depth'           => 0,
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
        </div>
    </div>
    <div class="footer__bottom">
    </div>

</footer>

<?php wp_footer(); ?>
</div>
</body>
</html>
