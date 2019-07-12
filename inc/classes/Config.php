<?php

namespace Crisp;

use Crisp\Base\Singleton;

/**
 * Class Config
 * @package Crisp
 * @method static Config getInstance()
 * @var Config $instance
 */
class Config extends Singleton
{
    
    /**
     * Config constructor.
     */
    protected function __construct()
    {
        parent::__construct();
        
        add_action( 'after_setup_theme', [ $this, 'registerNavMenus' ] );

        add_action( 'init', [ $this, 'themeSupports' ] );
        add_action( 'init', [ $this, 'imageSizes' ] );
    
        add_filter( 'wp_nav_menu_args', [ $this, 'filterNavMenusWrapper' ] );
        add_filter( 'image_size_names_choose', [ $this, 'mediaLibrarySizes' ] );
    
        add_action( 'widgets_init', [ $this, 'unregisterDefaultWidgets' ], 1 );
        add_action( 'widgets_init', [ $this, 'registerSidebars' ] );
        
    }
    
    
    /**
     * Setup theme
     *
     * @package     WordPress
     * @subpackage  RST v3
     * @since       3.0.0
     * @author      Luke Kortunov
     */
    public function themeSupports()
    {
        
        add_theme_support( 'menus' );
        add_theme_support( 'widgets' );
        add_theme_support( 'custom-logo' );
        add_theme_support( 'post-thumbnails' );
    
    }
    
    
    /**
     * Set up image sizes
     *
     * @link        https://developer.wordpress.org/reference/functions/add_image_size/
     * @link        http://wp-kama.ru/function/add_image_size
     *
     * @package     WordPress
     * @subpackage  RST v3
     * @since       3.0.0
     * @author      Luke Kortunov
     */
    public function imageSizes()
    {
        
        # Example of image sizes:
        // add_image_size( 'post-thumbnail', 640, 999999, false );
        // add_image_size( 'post-thumbnail-cropped', 150, 150, [ 'center', 'center' ] );
        
    }
    
    
    /**
     * Register menus
     *
     * @package     WordPress
     * @subpackage  RST v3
     * @since       1.0.0
     * @author      Luke Kortunov
     */
    public function registerNavMenus()
    {
    
        $menus = [
            'desktop' => esc_html__( 'Header Desktop Menu'),
            'mobile' => esc_html__( 'Header Moblie Menu'),
            'footer' => esc_html__( 'Footer Menu'),
        ];
        
        register_nav_menus( $menus );
        
    }
    
    
    /**
     * Remove menu wrapper (div.menu)
     *
     * @param array (menu args)
     * @return array
     *
     * @package     WordPress
     * @subpackage  RST v3
     * @since       1.0.0
     * @author      Luke Kortunov
     */
    public function filterNavMenusWrapper( $args )
    {
    
        $args['container']  = 'nav';
        $args['menu_class'] = 'menu-wrapper';
        return $args;
        
    }
    
    
    /**
     * Unregister default WordPress widgets
     * 
     * Uncomment default WP widgets, that you wish to unset
     */
    function unregisterDefaultWidgets()
    {
    
        // unregister_widget('WP_Widget_Pages');
        // unregister_widget('WP_Widget_Calendar');
        // unregister_widget('WP_Widget_Links');
        // unregister_widget('WP_Widget_Meta');
        // unregister_widget('WP_Widget_Archives');
        // unregister_widget('WP_Widget_Search');
        // unregister_widget('WP_Widget_Recent_Posts');
        // unregister_widget('WP_Widget_Categories');
        // unregister_widget('WP_Widget_Recent_Comments');
        // unregister_widget('WP_Widget_RSS');
        // unregister_widget('WP_Widget_Text');
        // unregister_widget('WP_Widget_Tag_Cloud');
        // unregister_widget('WP_Widget_Media_Audio');
        // unregister_widget('WP_Widget_Media_Video');
        // unregister_widget('WP_Widget_Media_Image');
        
    }
    
    
    /**
     * Register sidebars
     */
    public function registerSidebars()
    {
    
        # Example of sidebar registration
        // register_sidebar( [
        //     'name'          => sprintf( __( 'Example sidebar', TEXTDOMAIN ) ),
        //     'id'            => "example",
        //     'description'   => '',
        //     'class'         => '',
        //     'before_widget' => '<li id="%1$s" class="widget %2$s">',
        //     'after_widget'  => "</li>\n",
        //     'before_title'  => '<h2 class="widgettitle">',
        //     'after_title'   => "</h2>\n",
        // ] );
        
    }
    
}
