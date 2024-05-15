<?php

namespace Interview\Challenge2;

require_once 'vendor/autoload.php';

/*
 * Implement interface methods and proxy them to Laravel event dispatcher
 */


class LaravelEventDispatcher implements EventDispatcherInterface
{
    public function dispatch(object $event)
    {
        
    }

    public function addListener(string $event, \Closure $listener)
    {

    }
}