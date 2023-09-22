<script lang="ts">
    import {experiences} from '$lib/data';
</script>

<section class="flex items-start justify-between flex-col sm:flex-row dark:text-light">
            <p class="w-[15rem] mt-16 font-semibold text-xl">Experience</p>
            <div class="w-full">
                {#each experiences as experience}
                <div class="my-16">
                        <div class="flex justify-between items-center flex-wrap">
                            <div>
                                <p class="text-xl font-semibold">{experience.position}</p>
                                <p class="text-xl font-semibold">{experience.name}</p>
                            </div>
                            <p class="text-sm dark:text-gray">
                                {experience.startDate} - {experience.endDate}
                            </p>
                        </div>
                        <p class="text-sm mt-3 text-blue">{experience.location}</p>
                        <ul class="mt-3">
                            {#each experience.description as item}
                                <li class="text-gray-300">
                                    {item}
                                </li>
                            {/each}
                        </ul>
                    </div>
                {/each}
            </div>
</section>