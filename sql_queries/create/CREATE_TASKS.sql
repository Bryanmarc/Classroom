CREATE TABLE Tasks (
  id BIGINT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  title VARCHAR(64) NOT NULL,
  content VARCHAR(1024) NOT NULL,
  issuer_id BIGINT NOT NULL,
  time_posted DATETIME NOT NULL,
  time_due DATETIME,
  status VARCHAR(16) NOT NULL,
  priority TINYINT NOT NULL,
  assigned_to LONGTEXT NOT NULL,
  goal_parent_id BIGINT NOT NULL
);