<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep the Academy front end data-driven through `src/data/academy.ts` so catalogue, detail, and learning views remain consistent.
- The Academy belongs inside the main Ozikoro project and must use its single shared authentication, profile, role, and admin data source so registration applies everywhere.
