<?php

namespace Crisp\Gutenberguest;

class GutenBlock
{

    private $block;
    private $attributes;

    private $render;

    public function __construct() {}

    public function loadFromOptions($options = [])
    {
        $this->block = $options['block'] ?? '';
        $this->attributes = $options['attributes'] ?? [];
        $this->render = $options['render'] ?? false;
    }

    public function isValid()
    {
        return true;
    }

    public function wpInit()
    {
        $blockUrlBase   = apply_filters('gutenblock_base', get_stylesheet_directory_uri() . '/assets/dist/components/');
        $blockHandle    = apply_filters('gutenblock_handle', 'gutenberguest-block-' . $this->block, $this->block);
        $blockName      = apply_filters('gutenblock_name', 'gutenberguest/' . $this->block);

        $blockRegistrationAttr = array(
            'editor_script' => 'gutenberg-theme-scripts',
            'attributes' => $this->attributes
        );

        if($this->render) {
            $blockRegistrationAttr['render_callback'] = $this->render;
        }

        register_block_type( $blockName, $blockRegistrationAttr );
    }

}