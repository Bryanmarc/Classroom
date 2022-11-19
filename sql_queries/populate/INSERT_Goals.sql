INSERT INTO Goals (
    title,
    content,
    time_posted,
    time_due,
    status,
    project_team_parent_id
  )
VALUES (
    'Goal 1',
    'DO THIS THING PLEASE. THIS IS IMPORTANT. DO IT NOW.',
    NOW(),
    '2023-05-26 23:59:59',
    'IN PROGRESS',
    1
  );

  INSERT INTO Goals (
        title,
        content,
        time_posted,
        time_due,
        status,
        project_team_parent_id
  )
  VALUES(
        'Complete Exercise 5',
        'Answer Questions 1-5',
        NOW(),
        '2022-12-31 16:00:00',
        'STALE',
        2
  );