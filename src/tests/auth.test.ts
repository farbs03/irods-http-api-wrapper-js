import { getAPI } from './setupTests'

describe('AuthTests', () => {
    const api = getAPI()

    test('Auth token is received', async () => {
        console.log(api.getToken())
        expect(api.getToken()).toBeTruthy()
    })

    // test('Get information', async () => {
    //     const info = await api.get_information()
    //     console.log(info)
    //     expect(info).toBeTruthy()
    // })
})
