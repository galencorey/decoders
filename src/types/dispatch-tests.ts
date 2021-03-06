import { constant, Decoder, dispatch, number, object } from 'decoders';

interface Rect {
    _type: 'rect';
    x: number;
    y: number;
    width: number;
    height: number;
}

interface Circle {
    _type: 'circle';
    cx: number;
    cy: number;
    radius: number;
}

type Shape = Rect | Circle;

const rect: Decoder<Rect> = object({ _type: constant('rect' as 'rect'), x: number, y: number, width: number, height: number });

const circle: Decoder<Circle> = object({ _type: constant('circle' as 'circle'), cx: number, cy: number, radius: number });

// $ExpectType Decoder<Rect | Circle, unknown>
const shape = dispatch('_type', { rect, circle });
