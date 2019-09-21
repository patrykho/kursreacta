import { getMinutesAndSecondsFromDurationInSeconds } from '../../lib/time'

describe("getMinutesAndSecondsFromDurationInSeconds:", () => {
    describe('1. for durations shorter than one minute', () => {
        it("returns 0 min 30 sek for 30 second-duration", () => {
            expect(getMinutesAndSecondsFromDurationInSeconds(30)).toStrictEqual([0, 30])
        })

        it("returns 30 seconds for 30 second-duration", () => {
            expect(getMinutesAndSecondsFromDurationInSeconds(30)[1]).toBe(30)
        })

        it("returns 0 seconds for 30 second-duration", () => {
            expect(getMinutesAndSecondsFromDurationInSeconds(30)[0]).toBe(0)
        })

    });


    describe('2. for duration longer or equal to minute', () => {
        it("returns 2 minutes and 20 seconds for 140 second-duration", () => {
            expect(getMinutesAndSecondsFromDurationInSeconds(140)).toStrictEqual([2, 20])
        })

        it('returns 1 minutes for 60 seconds', () => {
            expect(getMinutesAndSecondsFromDurationInSeconds(60)[0]).toBe(1)

        });
    });


})
