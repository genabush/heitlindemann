<?php

namespace Crisp;

use Crisp\Base\Singleton;
use Crisp\Gutenberguest\Guten\Guten;

/**
 * Theme core class
 * @package Crisp
 * @method static Core getInstance()
 * @var Core $instance
 */
class Core extends Singleton
{
    
    /** @var Helpers */
    public $helpers;

    /** @var Actions */
    public $actions;

    /** @var Filters */
    public $filters;

    /** @var Config */
    public $config;

    /** @var Guten */
    public $gutenberg;
    
    /**
     * Core constructor.
     */
    protected function __construct()
    {
        parent::__construct();

        # Set-up gutenberg loader
        $this->gutenberg = new Gutenberguest\Guten\Guten();
        add_action('init', [$this->gutenberg, 'initBlocks']);

        # Set-up theme default behavior
        $this->config = Config::getInstance();

        # Set-up helpers
        $this->helpers  = Helpers::getInstance();
        $this->actions  = Actions::getInstance();
        $this->filters  = Filters::getInstance();

    }
    
}
