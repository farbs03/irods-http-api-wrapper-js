import { createClientForTesting } from './setupTests'

describe('ZoneTests', () => {
    const api = createClientForTesting()

    let zoneName = 'testZone'

    test('Add zone', async () => {
        const res = await api.zones.add({
            name: zoneName,
            comment: 'New test zone',
        })
        expect(res.data).toBeTruthy()
        expect(res.status).toEqual(200)
        expect(res.data?.irods_response.status_code).toEqual(0)
    })

    test('Modify zone', async () => {
        const res = await api.zones.modify({
            name: zoneName,
            property: 'comment',
            value: 'Modified comment',
        })
        expect(res.data).toBeTruthy()
        expect(res.status).toEqual(200)
        expect(res.data?.irods_response.status_code).toEqual(0)
    })

    test('Zone report', async () => {
        const res = await api.zones.report()
        expect(res.data).toBeTruthy()
        expect(res.status).toEqual(200)
        expect(res.data?.irods_response.status_code).toEqual(0)
    })

    test('Remove zone', async () => {
        const res = await api.zones.remove({
            name: zoneName,
        })
        expect(res.data).toBeTruthy()
        expect(res.status).toEqual(200)
        expect(res.data?.irods_response.status_code).toEqual(0)
    })
})
