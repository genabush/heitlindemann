<?php

namespace rst;

class Pagination
{
    
    /** @var bool */
    private $displayText;
    
    /** @var int */
    private $linksAround;
    
    /** @var int  */
    private $linksBorder;
    
    /** @var string */
    private $prevLinkText;
    
    /** @var string */
    private $nextLinkText;
    
    
    /**
     * Pagination constructor.
     *
     * @param bool $displayText
     * @param string $prevLinkText
     * @param string $nextLinkText
     * @param int $linksAround
     * @param int $linksBorder
     */
    public function __construct( bool $displayText = true, string $prevLinkText = '&laquo;', string $nextLinkText = '&raquo;', int $linksAround = 3, int $linksBorder = 1 )
    {
    
        $this->displayText  = $displayText;
        $this->prevLinkText = $prevLinkText;
        $this->nextLinkText = $nextLinkText;
        $this->linksAround  = $linksAround;
        $this->linksBorder  = $linksBorder;
    
        $this->coreNavi();
        
    }
    
    
    /**
     * Generates pagination
     *
     * @source http://dimox.name/wordpress-pagination-without-a-plugin/
     *
     * @return void
     */
    function coreNavi() {
        
        global $wp_query;
        
        $output = '';
    
        $pages = '';
        
        $max   = $wp_query->max_num_pages;
    
        if ( ! $current = get_query_var( 'paged' ) ) {
            $current = 1;
        }
    
        $a['base']    = str_replace( 999999999, '%#%', get_pagenum_link( 999999999 ) );
        $a['total']   = $max;
        $a['current'] = $current;
    
        $a['mid_size']  = $this->linksAround;
        $a['end_size']  = $this->linksBorder;
        $a['prev_text'] = $this->prevLinkText;
        $a['next_text'] = $this->nextLinkText;
    
        if ( $max > 1 ) {
            $output.= '<div class="navigation">';
        }
    
        if ( $this->displayText && $max > 1 ) {
            $pages = '<span class="pages">' . esc_html__( 'Page: ', TEXTDOMAIN ) . $current . esc_html__( ' from ', TEXTDOMAIN ) . $max . '</span>' . "\r\n";
        }
        
        $output.= $pages . paginate_links( $a );
    
        if ( $max > 1 ) {
            $output.= '</div>';
        }
        
        echo apply_filters( 'rst_pagination', $output );
        
    }
    
}
