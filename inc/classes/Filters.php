<?php

namespace Crisp;

use Crisp\Base\Singleton;

/**
 * Class Filters
 * @package Crisp
 * @method static Filters getInstance()
 * @var Filters $instance
 */
class Filters extends Singleton
{
    
    /**
     * Filters constructor.
     */
    public function __construct()
    {

        parent::__construct();
    
        add_filter( 'upload_mimes', [ $this, 'allowUploadSVG' ] );
        add_filter( 'generate_rewrite_rules', [ $this, 'taxonomySlugAsPostType' ] );
    
    }
    
    
    /**
     * Allow SVG files upload
     *
     * @param $types
     *
     * @return mixed
     */
    public function allowUploadSVG( $types )
    {
        
        $types['svg'] = 'image/svg+xml';
        
        return $types;
        
    }
    
    
    /**
     * Fix custom taxonomy terms for custom post types
     *
     * After filter taxonomy slug in url will be replaced with post type url
     *
     * @author http://someweblog.com/wordpress-custom-taxonomy-with-same-slug-as-custom-post-type/
     *
     * @param $wp_rewrite
     */
    public function taxonomySlugAsPostType( $wp_rewrite )
    {
    
        $rules = [];
        
        $taxonomies = get_taxonomies( [ '_builtin' => false ], 'objects' );
        
        $post_types = get_post_types( [ 'public' => true, '_builtin' => false ], 'names' );
    
        foreach ( $post_types as $post_type ) {
            
            foreach ( $taxonomies as $taxonomy ) {
                
                if ( $taxonomy->object_type[0] != $post_type ) {
                    continue;
                }
                
                $categories = get_categories( [
                    'type'       => $post_type,
                    'taxonomy'   => $taxonomy->name,
                    'hide_empty' => 0
                ] );
                
                foreach ( $categories as $category ) {
                    $rules[ $post_type . '/' . $category->slug . '/?$' ] = 'index.php?' . $category->taxonomy . '=' . $category->slug;
                }
                
            }
            
        }
        
        $wp_rewrite->rules = $rules + $wp_rewrite->rules;
        
    }

}
