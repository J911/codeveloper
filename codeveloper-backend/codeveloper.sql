CREATE TABLE members (
  `idx` int(11) NOT NULL,
  `user_id` text NOT NULL,
  `user_name` text NOT NULL,
  `user_avatar` text NOT NULL
);

ALTER TABLE `members`
  ADD PRIMARY KEY (`idx`);

ALTER TABLE `members`
  MODIFY `idx` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;


CREATE TABLE `files` (
  `idx` int(11) NOT NULL,
  `uid` text NOT NULL,
  `name` text NOT NULL,
  `icon` text NOT NULL
);

ALTER TABLE `files`
  ADD PRIMARY KEY (`idx`);

ALTER TABLE `files`
  MODIFY `idx` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;


CREATE TABLE `contributors` (
  `master` text NOT NULL,
  `contributor` text NOT NULL
);