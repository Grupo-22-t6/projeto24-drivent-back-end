import { ApplicationError } from '@/protocols';

export function roomIsFull(): ApplicationError {
  return {
    name: 'roomIsFull',
    message: 'This room has full!',
  };
}

export function userAlreadyReserveRoom(): ApplicationError {
  return {
    name: 'userAlreadyReserveRoom',
    message: 'You already reserve a room!',
  };
}
export function roomNotSpecified(): ApplicationError {
  return {
    name: 'roomNotSpecified',
    message: 'Room not specified',
  };
}
