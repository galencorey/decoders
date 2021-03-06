import { Annotation } from 'debrief';
import Result from 'lemons/Result';

export type $DecoderType<T> = T extends Decoder<infer V> ? V : never;

export interface Guard<T> {
  (blob: unknown): T;
}
export type Predicate<T> = (value: T) => boolean;
export type DecodeResult<T> = Result<Annotation, T>;
export interface Decoder<T, F = unknown> {
  (blob: F): DecodeResult<T>;
}
