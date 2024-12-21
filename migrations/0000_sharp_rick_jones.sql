CREATE TABLE `likes` (
	`slug` text PRIMARY KEY NOT NULL,
	`likes` integer DEFAULT 0 NOT NULL
);
--> statement-breakpoint
CREATE TABLE `session` (
	`id` text PRIMARY KEY NOT NULL,
	`user_id` integer NOT NULL,
	`expires_at` integer NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `user` (
	`id` integer PRIMARY KEY NOT NULL,
	`googleId` text NOT NULL,
	`name` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `views` (
	`slug` text PRIMARY KEY NOT NULL,
	`views` integer DEFAULT 0 NOT NULL
);
