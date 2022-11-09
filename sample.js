<form
  onSubmit={handleSubmit}
  className="w-full p-4 rounded-md shadow sm:p-8 dark:dark:bg-gray-900 dark:dark:text-gray-100"
>
  <div className="space-y-8 ng-untouched ng-pristine ng-valid">
    <div className="space-y-4">
      <div className="space-y-2">
        <label className="block text-lg">Full name *</label>
        <input
          type="name"
          name="name"
          required
          placeholder="Ariana Grande"
          className="w-full px-3 py-2 border rounded-md dark:dark:border-gray-700 dark:dark:bg-gray-900 dark:dark:text-gray-100 focus:dark:dark:border-violet-400"
        />
      </div>
      <div className="space-y-2">
        <label className="block text-lg">Image url *</label>
        <input
          type="photoURL"
          name="photoURL"
          required
          placeholder="http://dummyimage.com/122x100.png"
          className="w-full px-3 py-2 border rounded-md dark:dark:border-gray-700 dark:dark:bg-gray-900 dark:dark:text-gray-100 focus:dark:dark:border-violet-400"
        />
      </div>
      <div className="space-y-2">
        <label className="block text-lg">Email address *</label>
        <input
          type="email"
          name="email"
          required
          placeholder="leroy@jenkins.com"
          className="w-full px-3 py-2 border rounded-md dark:dark:border-gray-700 dark:dark:bg-gray-900 dark:dark:text-gray-100 focus:dark:dark:border-violet-400"
        />
      </div>
      <div className="space-y-2">
        <div className="flex justify-between">
          <label className="text-lg">Password *</label>
          <Link
            to="/"
            className="text-xs hover:underline dark:dark:text-gray-400"
          >
            Forgot password?
          </Link>
        </div>
        <input
          type="password"
          name="password"
          placeholder="******"
          required
          className="w-full px-3 py-2 border rounded-md dark:dark:border-gray-700 dark:dark:bg-gray-900 dark:dark:text-gray-100 focus:dark:dark:border-violet-400"
        />
      </div>
    </div>
    <button
      type="button"
      className="w-full text-lg px-8 py-3 font-semibold rounded-md dark:dark:bg-violet-400 dark:dark:text-gray-900 hover:btn hover:btn-ghost"
    >
      Create Account
    </button>
  </div>
  <div className="text-red-700">{error}</div>
</form>;
