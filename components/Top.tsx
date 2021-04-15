import React from 'react';
import {Button} from '@chakra-ui/react';
import {IoSettingsSharp} from 'react-icons/io5';

function SettingButton() {
  return (
    <Button
      borderRadius="2rem"
      leftIcon={<IoSettingsSharp />}
      colorScheme="blue"
      variant="outline"
    >
      設定
    </Button>
  );
}

/**
 * トップページ
 */
export default function Top() {
  return (
    <React.Fragment>
      <SettingButton />
    </React.Fragment>
  );
}
