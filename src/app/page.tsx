import { AuthModal } from '@twitter/components/AuthModal'
import { Tweet } from '@twitter/components/Tweet'

// import fs from 'fs'

export default function Home() {
  // fs.readFile('demofile1.html', function (err, ''))
  // ngnbkjngbjkg

  return (
    <main>
      <div className="flex justify-between">
        <div className="w-[17rem]">Side Menu</div>

        <div className="flex-1">
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
        </div>

        <div className="w-[24rem]">
          <div>
            <h3 className="font-bold">New to Twitter?</h3>
            <p>Sign up to get a personalised feed</p>
          </div>

          <div>
            <button>Login</button>
          </div>

          <div>
            <button>Create Account</button>
          </div>
        </div>
      </div>

      <AuthModal />
    </main>
  )
}
