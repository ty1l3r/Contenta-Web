<?php

declare(strict_types=1);

/**
 * Copyright (c) 2018 Andreas Möller.
 *
 * For the full copyright and license information, please view
 * the LICENSE file that was distributed with this source code.
 *
 * @see https://github.com/localheinz/json-normalizer
 */

namespace Localheinz\Json\Normalizer\Exception;

final class InvalidJsonEncodedException extends \InvalidArgumentException implements ExceptionInterface
{
    /**
     * @var string
     */
    private $encoded;

    public static function fromEncoded(string $encoded): self
    {
        $exception = new self(\sprintf(
            '"%s" is not valid JSON.',
            $encoded
        ));

        $exception->encoded = $encoded;

        return $exception;
    }

    public function encoded(): string
    {
        return $this->encoded;
    }
}
