<?php

namespace Crisp\Base;

/**
 * Abstract Singleton class. Use for inheritance
 * @package Crisp\Base
 */
abstract class Singleton
{

    /** @var Singleton $instance */
    protected static $instance;

    /**
     * Instance getter
     * @return Singleton Instance
     */
    public static function getInstance()
    {
        if( static::$instance === null ){
            static::$instance = new static();
        }

        return static::$instance;
    }

    protected function __construct() {}
    protected function __clone() {}
    protected function __wakeup() {}

}
