<?php

/**
 * PSR-4 class autoloader
 */
require_once 'vendor/autoload.php';

// Core classes
use Crisp\Core;
use Crisp\Blocks\PostSnapshot;

/**
 * Core singleton class
 */
$core = Core::getInstance();

/**
 * Load gutenberg blocks
 */

$core->gutenberg->register([
    'block' => 'crisp-text-block',
])->register([
    'block' => 'crisp-post-snapshot',
    'render' => [PostSnapshot::class, 'renderCallback']
]);

/**
 * Load scripts and styles
 *
 * @link        http://developer.wordpress.org/reference/functions/wp_enqueue_script
 * @link        http://wp-kama.ru/function/wp_enqueue_script
 *
 * @package     WordPress
 * @subpackage  RSV v3
 * @since       1.0.0
 * @author      Luke Kortunov
 */
function rst_load_assets()
{
    //--- Load scripts and styles only for frontend: -----------------------------
    if (!is_admin()) {

        // Styles
        wp_enqueue_style('slick', '//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css');
        wp_enqueue_style('jquery-mobile-menu', get_template_directory_uri() . '/assets/libs/jquery-mobile-menu/dist/styles/jquery-simple-mobilemenu.css');
        wp_enqueue_style('app', get_template_directory_uri() . '/assets/dist/css/app.min.css');

        // Scripts
        wp_enqueue_script('jquery', '//code.jquery.com/jquery-3.3.1.min.js', array(), false);
        wp_enqueue_script('slick', '//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js');
        wp_enqueue_script('jquery-simple-mobilemenu', get_template_directory_uri() . '/assets/libs/jquery-mobile-menu/dist/jquery-simple-mobilemenu.js');
        wp_enqueue_script('app', get_template_directory_uri() . '/assets/dist/js/app.min.js', [], '1.0.0', true);
    }

    wp_register_script(
        'gutenberg-theme-scripts',
        get_template_directory_uri() . '/assets/dist/components.bundle.js',
        array('wp-blocks', 'wp-element', 'wp-editor', 'wp-components', 'wp-data'),
        false, false
    );
}

add_action('init', 'rst_load_assets');


/**
 * Filter wp_nav_menu container (div)
 *
 * @param array $args - hook will send this parameter to function
 * @return array
 *
 * @package     WordPress
 * @subpackage  RST v3
 * @since       1.0.0
 * @author      Luke Kortunov
 */
function rst_filter_menu($args)
{
    $args['container'] = false;
    return $args;
}

add_filter('wp_nav_menu_args', 'rst_filter_menu');


/**
 * Function, that require svg-file and return or print it
 *
 * @param string $filename - file name excluding file extension
 * @param bool $return - true == include file || false == return path
 * @param string $dir - if svg files directory not eq. "svg" - set target directory related to theme root
 *
 * @return string/void
 *
 * @since       1.0.0
 * @author      Luke Kortunov
 */
function svg($filename, $return = false, $content = true, $dir = 'assets/dist/svg')
{
    $dir = mb_substr($dir, 0, 1) == '/' ? mb_substr($dir, 1, mb_strlen($dir)) : $dir;
    $dir = mb_substr($dir, -1, 1) == '/' ? mb_substr($dir, 0, mb_strlen($dir) - 1) : $dir;
    $path = get_template_directory() . '/' . $dir . '/' . $filename . '.svg';
    if ($return == false) {
        @require $path;
    } else {
        if ($content === true) {
            return file_get_contents($path);
        } else {
            return $path;
        }
    }
}
function cc_mime_types($mimes) {
    $mimes['svg'] = 'image/svg+xml';
    return $mimes;
}
add_filter('upload_mimes', 'cc_mime_types');

