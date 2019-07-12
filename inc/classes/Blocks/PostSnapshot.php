<?php

namespace Crisp\Blocks;

use Crisp\Gutenberguest\GutenBlock;

class PostSnapshot extends GutenBlock
{

    public static function renderCallback($attributes, $content)
    {
        set_query_var('post_snapshot_attributes', $attributes);
        ob_start();
        get_template_part('assets/components/post-snapshot/render');
        return ob_get_clean();
    }

}