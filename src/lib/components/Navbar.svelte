<script lang="ts">
const createLogo = (name: string) =>
    name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase();
</script>

<header class="container flex items-center justify-between h-[80px] sm:h-[123px]">
    <a class="text-2xl dark:text-light font-semibold dark:font-semibold font-outfit" href="/">
        {createLogo("H B")}.
    </a>
    <nav>
        <ul class="flex items-center">
            <li>
                <a class="p-4 dark:text-light block text-lg" href="/projects">
                    Projects
                </a>
            </li>
            <li>
                <a class="p-4 dark:text-light block text-lg" href="/resume" target="_blank">
                    Resume
                </a>
            </li>
            <li>
                <a class="p-4 dark:text-light block text-lg" href="/blog">
                    Blogs
                </a>
            </li>
        </ul>
    </nav>
</header>
