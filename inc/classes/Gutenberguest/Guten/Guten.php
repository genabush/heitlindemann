<?php

namespace Crisp\Gutenberguest\Guten;

use Crisp\Gutenberguest\GutenBlock;
use Crisp\Base\Singleton;

class Guten extends Singleton
{

    private $blocks = [];

    public function initBlocks()
    {
        $blocksToLoad = apply_filters('gutenberguest_blocks_to_init', $this->blocks);

        foreach($blocksToLoad as $block) {
            /** @var GutenBlock $block */
            $block->wpInit();
        }

        return true;
    }

    public function register($options = [])
    {
        $newBlock = new GutenBlock();
        $newBlock->loadFromOptions($options);

        if($newBlock->isValid()) {
            $this->blocks[] = $newBlock;
        }

        return $this;
    }

}