import React from 'react'

export const Tweet = () => {
  return (
    <div className="flex gap-10 mb-[20px]">
      <div className="shrink-0 w-[40px] h-[40px] bg-cyan-600 rounded-full"></div>

      <div>
        <div className="flex gap-4 mb-[10px]">
          <p className="font-bold">Handle</p>
          <p>Username</p>
          <p>Time</p>
        </div>

        <div>
          Raptor V3 just achieved 350 bar chamber pressure (269 tons of thrust).
          Congrats to @SpaceX propulsion team! Starship Super Heavy Booster has
          33 Raptors, so total thrust of 8877 tons or 19.5 million pounds.
        </div>
      </div>
    </div>
  )
}
