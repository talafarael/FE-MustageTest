import { useTaskParamStore } from '@/store/taskParamStore';
import { Select } from '@radix-ui/themes';
import { useState } from "react"

export const FilteBar = () => {
  const [selected, setSelected] = useState<true | false | null>(null);
  const [value, setValue] = useState("");



  const { setFilter, setSearch } = useTaskParamStore()
  const handleClick = () => {
    setSearch(value)
  };

  const handleValueChange = (value: string) => {
    let parsed: true | false | null;
    if (value === 'true') parsed = true;
    else if (value === 'false') parsed = false;
    else parsed = null;
    setSelected(parsed);
    setFilter(parsed)
  };

  return (
    <div>
      <Select.Root value={String(selected)} onValueChange={handleValueChange}>
        <Select.Trigger placeholder="Выберите значение" />
        <Select.Content>
          <Select.Item value="true">True</Select.Item>
          <Select.Item value="false">False</Select.Item>
          <Select.Item value="null">Null</Select.Item>
        </Select.Content>
      </Select.Root>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Введите что-то..."
        className="border border-gray-300 rounded px-3 py-2"
      />
      <button
        onClick={handleClick}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Отправить
      </button>
    </div>
  );
};
