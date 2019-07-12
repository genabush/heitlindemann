<?php

/**
 * Page template
 *
 * @package     WordPress
 * @subpackage  RST v3
 * @since       1.0.0
 * @author      Luke Kortunov
 */

get_header();
the_post();

?>

    <div class="content">

        <?php the_content(); ?>

    </div>

<?php

get_footer();