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

namespace Localheinz\Json\Normalizer\Format;

use Localheinz\Json\Normalizer\Exception;
use Localheinz\Json\Normalizer\Json;

final class JsonEncodeOptions
{
    /**
     * @var int
     */
    private $value;

    private function __construct(int $value)
    {
        $this->value = $value;
    }

    /**
     * @param int $value
     *
     * @throws Exception\InvalidJsonEncodeOptionsException
     *
     * @return JsonEncodeOptions
     */
    public static function fromInt(int $value): self
    {
        if (0 > $value) {
            throw Exception\InvalidJsonEncodeOptionsException::fromJsonEncodeOptions($value);
        }

        return new self($value);
    }

    public static function fromJson(Json $json): self
    {
        $jsonEncodeOptions = 0;

        if (false === \strpos($json->encoded(), '\/')) {
            $jsonEncodeOptions |= \JSON_UNESCAPED_SLASHES;
        }

        if (1 !== \preg_match('/(\\\\+)u([0-9a-f]{4})/i', $json->encoded())) {
            $jsonEncodeOptions |= \JSON_UNESCAPED_UNICODE;
        }

        return self::fromInt($jsonEncodeOptions);
    }

    public function value(): int
    {
        return $this->value;
    }
}
