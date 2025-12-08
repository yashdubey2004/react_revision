// NOTE: Quick reproducible fix steps (Windows PowerShell):
// 1) Update package.json: replace any "@reduxjs/toolkit": "<anything>" with:
//    "@reduxjs/toolkit": "^1.9.7"
//    (do NOT use git/ssh URLs — use the npm package name)
// 2) Remove node_modules and lockfile (PowerShell):
//    Remove-Item -Recurse -Force .\node_modules
//    Remove-Item -Force .\package-lock.json
//    (Or in cmd.exe: rd /s /q node_modules & del package-lock.json)
// 3) Clean npm cache:
//    npm cache clean --force
// 4) Install from registry:
//    npm install
// 5) If you need to add SSH keys for other git operations (not required for npm registry):
//    Start-Service ssh-agent
//    ssh-add ~\.ssh\id_ed25519
// 6) If a package still tries to fetch from git, run:
//    npm ls --depth=0
//    and inspect package.json for any git:// or github: entries and replace them.
//
// Summary: use the registry package name "@reduxjs/toolkit": "^1.9.7" and PowerShell's
// Remove-Item to delete node_modules/package-lock.json before running `npm install`.
import {Inputbox} from './Inputbox.jsx';

export {Inputbox};
export default Inputbox;