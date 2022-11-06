import { ApplicationError } from '@/protocols';

export function roomIsFull(): ApplicationError {
  return {
    name: 'roomIsFull',
    message: 'This room has full!',
  };
}
