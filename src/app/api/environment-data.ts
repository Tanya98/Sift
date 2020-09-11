import { EnvironmentModel } from './models';
import { ClientId } from '../enums/client-id';

export const environmentData: EnvironmentModel[] = [
    {
        name: 'Live',
        clientId: ClientId.Live
    },
    {
        name: 'Sandbox',
        clientId: ClientId.Sandbox
    }
]